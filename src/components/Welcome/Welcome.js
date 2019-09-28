import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component {
render() {
return (
<div className="row " id="Body">
<div className="medium-12 columns">
<h2 id="welcomeText">Performance Management Authentication App</h2>
<a href="/employee" className="button">Employee</a>
<a href="/admin" className="button success">Administrator</a>
</div>
</div>
);
}
}
export default Welcome;