(this["webpackJsonp@genially/view-client"]=this["webpackJsonp@genially/view-client"]||[]).push([[5],{680:function(e,t){},681:function(e,t){},682:function(e,t){},689:function(e,t,i){"use strict";i.r(t);var n,o=i(0),s=i.n(o),r=i(15),c=i.n(r),l=i(5),a=i(11),p=i(686);let d=Object(l.b)("viewStore","paintStore")(n=Object(l.c)(n=class extends o.Component{constructor(){super(...arguments),this.init=e=>{this.sketch=e}}componentDidMount(){const{paintStore:e,viewStore:t}=this.props;e.init(this.sketch,t.currentLocation)}componentWillUnmount(){const{paintStore:e,viewStore:t,slideId:i}=this.props;i!==t.currentLocation&&e.unmount(i,this.sketch)}render(){const{paintStore:e,viewStore:t,slideId:i}=this.props,{sketchStorage:n,selectedColor:o,widthSelected:r}=e;return s.a.createElement("div",{className:"genially-view-sketch-field-container"},s.a.createElement(p.a,{ref:e=>this.init(e),height:t.heightSlide,width:t.widthSlide,tool:p.b.Pencil,lineColor:o,lineWidth:r,defaultValue:n[i],className:Object(a.a)(["genially-view-sketch-field",{"genially-view-vertical-center":t.isMarginTop,"genially-view-horizontal-center":!t.isMarginTop}])}))}})||n)||n;d.wrappedComponent.propTypes={viewStore:c.a.object.isRequired,paintStore:c.a.object.isRequired,slideId:c.a.string.isRequired},t.default=d}}]);
//# sourceMappingURL=sketch.3cffbc93.chunk.js.map