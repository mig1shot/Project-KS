import React,{useState , useRef , useEffect} from 'react';
window.d3 = require('d3');
const functionPlot = require("function-plot");
const math = require('mathjs');
function Graph(props){
    const root = useRef();
        const plot = (data) => functionPlot({
            target : root.current,
            width : 580,
            height : 400,
            xAxis : {label:'x'},
            yAxis : {label :'f(x)'},
            grid : false,
            data : [
                    { 
                        fn: data,
                        derivative : {
                            fn : math.derivative(data, 'x').toString(),
                            updateOnMouseMove : true
                        }             
                    }
                 ],
                // annotations: [{x:data.x.toString(), text : 'Result : '}]
        });
        useEffect(()=>{
            const data = props.data;
            console.log(data,'++++');
             plot(data);
            return () => {
                console.log('Graph is unmount!');
            }
        },[props.data])
    return (
        <div ref={root}></div>
    );
};
export default Graph