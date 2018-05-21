// import * as Rx from "rxjs/Observable";
import { Observable} from "rxjs/Observable";
import { Subject } from 'rxjs/subject';

var subject   = new Subject();

subject.subscribe(
    data => addItem('Observer ' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

subject.next('The first thing has been sent');

var observer2 = subject.subscribe(
    data => addItem('Observer 2 ' + data)
);

subject.next('The next second thing has been sent');
subject.next('The next third thing has been sent');

subject.unsubscribe();

subject.next('A final thing has been sent')


function addItem(val: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}