// import * as Rx from "rxjs/Observable";
import { Observable} from "rxjs/Observable";


let observable = Observable.create((observer: any) => {
    try {
        observer.next('Hello!');
        observer.next('Hello! How are you?');

        setInterval(()=>{
            observer.next('Im good');
        }, 2000)

        // observer.complete();
        observer.next('This will not send');
    } catch (error) {
        observer.error(error);
    }

});

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('completed')
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);


observable.subscribe( (x: any) => {
    console.log(x);
})

function addItem(val: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}