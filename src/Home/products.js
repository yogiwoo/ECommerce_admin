import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Sidebar from "../Sidebar/Sidebar";

function productManagement(){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Sidebar/>
                    </Col>
                
                </Row>
                <Row>
                    <Col  xs={12} sm={6} md={4}>
                        <div className="customCard">
                            <h2>Create Product</h2>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className="customCard">
                            <h2>Edit Product</h2>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className="customCard">
                            <h2>Show Products</h2>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className="customCard">
                            <h2>Manage Brands</h2>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className="customCard">
                            <h2>Manage Tags</h2>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className="customCard">
                            <h2>Manage Categories</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default productManagement;