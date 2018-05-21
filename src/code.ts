// import * as Rx from "rxjs/Observable";
import { Observable} from "rxjs/Observable";
import { fromEvent } from 'rxjs/Observable/fromEvent';

var observable = fromEvent(document, 'mousemove')

setTimeout(() => {
    var subscription = observable.subscribe(
        (x: any) => console.log(x)
    )
}, 2000);

function addItem(val: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}