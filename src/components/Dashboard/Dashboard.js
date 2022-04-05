
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data=[
        {
        "id":"2022040401",
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
        "id":"2022040402",
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
        "id":"2022040403",
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
        "id":"2022040404",
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
        "id":"2022040405",
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
        "id":"2022040406",
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (

        <Container>
  <Row>
    <Col  sm={6}>
        <h2>Monthly Investment</h2>
    <LineChart width={800} height={450} data={data}>
    <Line dataKey={'investment'}></Line>
    <Line dataKey={'sell'}></Line>
    <XAxis dataKey={'month'}/>
    <Tooltip/>
    <YAxis/>
  </LineChart>
    </Col>
    <Col sm={6}>
        <h2>monthly Selling</h2>
    <BarChart width={800} height={450} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis/>
    <Tooltip />
    <Legend/>
    {/* <Bar dataKey={'investment'}/> */}
        <Bar dataKey={'sell'}/>
    </BarChart>
        </Col>
        <Col>
        <h2>Monthly revenue</h2>
        <PieChart width={730} height={250}>
  <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
        </Col>
  </Row>

 
</Container>

        
        
        
    );
};

export default Dashboard;