import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Analysis.css";
import {
  Col,
  Dropdown,
  Icon,
  Menu,
  Row,
  Divider,
  Select,
  Radio,
  Empty,
  Tabs,
  Table
} from "antd";

import ReactEcharts from "echarts-for-react";

import icon1 from "../assets/analysis-icon-1.png";
import icon2 from "../assets/analysis-icon-2.png";
import icon3 from "../assets/analysis-icon-3.png";
import icon4 from "../assets/analysis-icon-4.png";
import icon5 from "../assets/analysis-icon-5.png";

const { Option } = Select;
const { TabPane } = Tabs;

const Panel = props => {
  const { value, onChange } = props;
  const { group, time, view } = value;

  return (
    <div>
      <Row>
        群组筛选
        <Select
          style={{ width: 120 }}
          value={group}
          onChange={v => {
            if (onChange) {
              //console.log(v);
              value.group = v;
              onChange(value);
            }
          }}
        >
          <Option value="">全部</Option>
          <Option value="1">默认分组</Option>
        </Select>
      </Row>
      <Row>
        选择时间
        <Radio.Group
          value={time}
          onChange={e => {
            if (onChange) {
              value.time = e.target.value;
              onChange(value);
            }
          }}
        >
          <Radio.Button value="today">今日</Radio.Button>
          <Radio.Button value="yesterday">昨天</Radio.Button>
          <Radio.Button value="sevendays">近7天</Radio.Button>
          <Radio.Button value="thirtydays">近30天</Radio.Button>
        </Radio.Group>
      </Row>
      <Row>
        视图
        <Radio.Group
          value={view}
          onChange={e => {
            if (onChange) {
              value.view = e.target.value;
              onChange(value);
            }
          }}
        >
          <Radio.Button value="overview">总览</Radio.Button>
          <Radio.Button value="details">明细</Radio.Button>
        </Radio.Group>
      </Row>
    </div>
  );
};

const Overview = props => {
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={5}>
          <div style={{ backgroundColor: "#1564D8" }}>
            <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
              社群总数[查看详情]
              <img src={icon1} alt="" />
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div style={{ backgroundColor: "#33AA44" }}>
            <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
              社群总数[查看详情]
              <img src={icon2} alt="" />
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div style={{ backgroundColor: "#F6AC30" }}>
            <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
              社群总数[查看详情]
              <img src={icon3} alt="" />
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div style={{ backgroundColor: "#6758F3" }}>
            <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
              社群总数[查看详情]
              <img src={icon4} alt="" />
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ backgroundColor: "#FCC80D" }}>
            <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
              社群总数[查看详情]
              <img src={icon5} alt="" />
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <div>邀请榜</div>
          <Empty />
        </Col>
        <Col span={12}>
          <div>土豪榜</div>
          <Empty />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <div>时段详情</div>
          <div>
            <ReactEcharts
              option={{
                xAxis: {
                  type: "category",
                  data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                yAxis: {
                  type: "value"
                },
                series: [
                  {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: "line"
                  }
                ]
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

const Details = props => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "Address",
      dataIndex: "address"
    }
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="活跃的群(0)" key="1">
          <Table columns={columns} dataSource={data} size="middle" />
        </TabPane>
        <TabPane tab="未活跃的群(0)" key="2">
          <Table columns={columns} dataSource={data} size="middle" />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: { group: "", time: "today", view: "overview" }
    };
  }

  render() {
    const { condition } = this.state;
    const { group, time, view } = condition;
    return (
      <div>
        <div style={{ fontSize: "14px", fontWeight: 700 }}>社群榜</div>
        <Divider />
        <div>
          <Row>
            <Panel
              value={condition}
              onChange={c => {
                console.log(c);
                this.setState({
                  condition: c
                });
              }}
            />
          </Row>
        </div>
        <Divider />
        <div>{view === "overview" ? <Overview /> : <Details />}</div>
      </div>
    );
  }
}
