import React, {Component} from 'react';
import styled from 'styled-components';
import 'animate.css';

import HeaderMenu from './HeaderMenu';
import DailyAgenda from './DailyAgenda';


class DateExpansion extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isExpanded:true,
        };
        this.toggleExpansion = this.toggleExpansion.bind(this);
    }
    render(){
        const Wrapper = styled.div.attrs({
            className: `br2 shadow-4 fixed bottom-0 left-0 w-100 sf bg-moon-gray`
        })`
            transition: height 3s;
            height:${this.state.isExpanded ? '91vh' : '10vh'}

        `;
        return (
            <Wrapper onClick={this.toggleExpansion} data-expanded={this.state.isExpanded}>
                <HeaderMenu className='fl w-100 pa2 br2' selectedDate = {this.props.selected} expanded ={this.state.isExpanded} onClick={this.toggleExpansion} />
                <DailyAgenda className='fl w-100' hasData={true}></DailyAgenda>
            </Wrapper>    
        );
    }
    
    toggleExpansion(){
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
        console.log('hello');
    }
}

export default DateExpansion;