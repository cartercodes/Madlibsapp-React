import React, { Component } from 'react';
import {
    Col,
    Row
} from 'reactstrap';
class MadLibForm extends Component {

    handleChange = function() {
        console.log('trying to handle change');
    }



    render() {
        return (
            <Row style={{textAlign: 'Center', color: 'white'}}>
               <Col md="3" className="InputWrapper">
                    <Row>
                        <Col md="2">
                            <label className="greenLabel">1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder='Color' type='text' onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col> 
                <Col md="3" className="InputWrapper">
                    <Row>
                        <Col md="2">
                            <label className="greenLabel">1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder='Color' type='text' onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col> 
                <Col md="3" className="InputWrapper">
                    <Row>
                        <Col md="2">
                            <label className="greenLabel">1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder='Color' type='text' onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col> 
                <Col md="3" className="InputWrapper">
                    <Row>
                        <Col md="2">
                            <label className="greenLabel">1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder='Color' type='text' onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col>  
            </Row>
        );

    }
}

export default MadLibForm; 