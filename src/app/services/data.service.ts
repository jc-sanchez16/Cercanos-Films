import { Injectable } from '@angular/core';
import { WhereFilterOp, increment } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, first } from 'rxjs/operators';

export interface Filter {
    name: string;
    value: any;
    comparator: WhereFilterOp;
}

@Injectable({
    providedIn: 'root'
})

export class DataService {


    constructor(
        private db: AngularFirestore
    ) {
    }

    public getCol(plink, filters: Filter[], options) {
        console.log('dat service', plink, filters, options)
        return this.db.collection(plink, ref => {
            let query: any = ref;
            filters.forEach(filter => {
                query = query.where(filter.name, filter.comparator, filter.value);
            });
            options.orders && options.orders.forEach(order => {
                query = query.orderBy(order.field, order.dir);
            });
            query = options.limit ? query.limit(options.limit) : query;
            if (options.doc) {
                query = options.direction ? query.startAfter(options.doc) : query.startAt(options.doc)
            }
            return query;
        }).snapshotChanges().pipe(
            map((actions: any) =>
                actions.map((a: any) => {
                    var data = a.payload.doc.data();
                    data.fbId = a.payload.doc.id;
                    return data;
                })
            )
        );
    }

    public getDoc(plink, id) {
        let ref = this.db.collection(plink).doc(id);
        return ref.valueChanges();
    }

    public getDocOnce(plink, id) {
        let ref = this.db.collection(plink).doc(id);
        return ref.valueChanges().pipe(first()).toPromise();
    }


}
