import React from 'react';
import Cpu from './Cpu';
import Memory from './Memory';
import Info from './Info';
import './Widget.css';


/*

class Widget extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        const { freeMem,totalMem,usedMem,memUseage,osType,upTime,cpuModel,numCores,cpuSpeed,cpuLoad, macA, isActive } = this.props.data;

        const cpuWidgetId = `cpu-widget-${macA}`;
        const memWidgetId = `mem-widget-${macA}`;

        const cpu = {cpuLoad, cpuWidgetId}
        const mem = {totalMem, usedMem, memUseage,freeMem, memWidgetId}
        const info = {macA,osType,upTime,cpuModel,numCores,cpuSpeed}

        let notActiveDiv = '';
        if(!isActive){
            notActiveDiv = <div className="not-active">Offline</div>
        }



        return(
            <div className="widget col-sm-12">
                {notActiveDiv}
                <Cpu cpuData = {cpu} />
                <Memory memData = {mem} />
                <Info infoData = {info} />
            </div>
        )
    }
}
export default Widget;

*/


const Widget = (props)=>{
    const { freeMem,totalMem,usedMem,memUseage,osType,upTime,cpuModel,numCores,cpuSpeed,cpuLoad, macA, isActive } = props.data;
    
    const cpuWidgetId = `cpu-widget-${macA}`;
    const memWidgetId = `mem-widget-${macA}`;

    const cpu = {cpuLoad, cpuWidgetId}
    const mem = {totalMem, usedMem, memUseage,freeMem, memWidgetId}
    const info = {macA,osType,upTime,cpuModel,numCores,cpuSpeed}

    let notActiveDiv = '';
    if(!isActive){
        notActiveDiv = <div className="not-active">Offline</div>
    }
    return(
            <div className="widget col-sm-12">
                {notActiveDiv}
                <Cpu cpuData = {cpu} />
                <Memory memData = {mem} />
                <Info infoData = {info} />
            </div>
        );
}

export default Widget;