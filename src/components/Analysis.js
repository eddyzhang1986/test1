import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
//import "./Analysis.css";
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
  Table,
  Typography,
  Card,
  List,
  Button
} from "antd";
import axios from "axios";

import ReactEcharts from "echarts-for-react";

import icon1 from "../assets/analysis-icon-1.png";
import icon2 from "../assets/analysis-icon-2.png";
import icon3 from "../assets/analysis-icon-3.png";
import icon4 from "../assets/analysis-icon-4.png";
import icon5 from "../assets/analysis-icon-5.png";

const { Option } = Select;
const { TabPane } = Tabs;
const { Text } = Typography;

const Panel = props => {
  const { value, onChange } = props;
  const { group, time, view } = value;

  const size = "small";

  return (
    <>
      <Row style={{ height: "32px", lineHeight: "32px" }}>
        <Text>群组筛选:</Text>
        &nbsp;&nbsp;
        <Select
          size={size}
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
      <Row style={{ height: "32px", lineHeight: "32px" }}>
        <Text>选择时间:</Text>
        &nbsp;&nbsp;
        <Radio.Group
          size={size}
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
      <Row style={{ height: "32px", lineHeight: "32px" }}>
        <Text>视图:</Text>
        &nbsp;&nbsp;
        <Radio.Group
          size={size}
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
    </>
  );
};

const Cards = props => {
  const gridStyle = {
    width: "20%",
    textAlign: "center",
    padding: "5px"
  };
  const imgStyle = {
    marginTop: "20px",
    marginBottom: "20px"
  };
  return (
    <Card style={{ margin: "10px" }}>
      <Card.Grid style={gridStyle}>
        <div style={{ backgroundColor: "#1564D8" }}>
          <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
            社群总数[查看详情]
            <img src={icon1} alt="" style={imgStyle} />
          </div>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={{ backgroundColor: "#33AA44" }}>
          <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
            社群总数[查看详情]
            <img src={icon2} alt="" style={imgStyle} />
          </div>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={{ backgroundColor: "#F6AC30" }}>
          <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
            社群总数[查看详情]
            <img src={icon3} alt="" style={imgStyle} />
          </div>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={{ backgroundColor: "#6758F3" }}>
          <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
            社群总数[查看详情]
            <img src={icon4} alt="" style={imgStyle} />
          </div>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={{ backgroundColor: "#FCC80D" }}>
          <div style={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
            社群总数[查看详情]
            <img src={icon5} alt="" style={imgStyle} />
          </div>
        </div>
      </Card.Grid>
    </Card>
  );
};
const Chart = props => {
  const [data, setData] = useState([820, 932, 901, 934, 1290, 1330, 1320]);
  const loadData = () => {
    axios.get("/getChartData.api").then(resp => {
      setData(oldData => {
        console.log(oldData);
        return resp.data;
      });
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Row>
        <Col push={20}>
          <Button
            onClick={() => {
              loadData();
            }}
          >
            刷新
          </Button>
        </Col>
      </Row>
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
              data: data,
              type: "line"
            }
          ]
        }}
      />
    </>
  );
};

const Overview = props => {
  return (
    <>
      <Row>
        <Cards />
      </Row>

      <Row gutter={[8, 8]} style={{ padding: "10px" }}>
        <Col span={12}>
          <List
            style={{
              border: "1px solid #ebedf0",
              paddingLeft: "10px",
              paddingRight: "10px",
              minHeight: "222px"
            }}
            header={
              <Text strong>
                <Divider
                  type="vertical"
                  style={{ backgroundColor: "#1564D8", width: "5px" }}
                />
                邀请榜
              </Text>
            }
            size="small"
            dataSource={["1", "5"]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Col>
        <Col span={12}>
          <List
            style={{
              border: "1px solid #ebedf0",
              paddingLeft: "10px",
              paddingRight: "10px",
              minHeight: "222px"
            }}
            header={
              <Text strong>
                <Divider
                  type="vertical"
                  style={{ backgroundColor: "#1564D8", width: "5px" }}
                />
                土豪榜
              </Text>
            }
            size="small"
            dataSource={[]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>

      <Row
        gutter={[8, 8]}
        style={{ margin: "10px", border: "1px solid #ebedf0" }}
      >
        <Col span={24}>
          <Text strong>
            <Divider
              type="vertical"
              style={{ backgroundColor: "#1564D8", width: "5px" }}
            />
            时段详情
          </Text>
          <Chart />
        </Col>
      </Row>
    </>
  );
};

const Details = props => {
  const columns = [
    {
      title: "微信群",
      dataIndex: "group"
    },
    {
      title: "总发言数",
      dataIndex: "totalmessage"
    },
    {
      title: "活跃人数",
      dataIndex: "livecount"
    },
    {
      title: "总人数",
      dataIndex: "totalperson"
    },
    {
      title: "进群人数",
      dataIndex: "enterperson"
    }
  ];
  const data = [
    {
      key: "1",
      group: "群组1",
      totalmessage: 32,
      livecount: 12,
      totalperson: 12,
      enterperson: 12
    },
    {
      key: "2",
      group: "群组2",
      totalmessage: 32,
      livecount: 12,
      totalperson: 12,
      enterperson: 12
    }
  ];
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="活跃的群(0)" key="1">
          <Table columns={columns} dataSource={data} size="middle" />
        </TabPane>
        <TabPane tab="未活跃的群(0)" key="2">
          <Table columns={columns} dataSource={data} size="middle" />
        </TabPane>
      </Tabs>
    </>
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
      <div style={{ margin: "20px", border: "1px solid #ebedf0" }}>
        <Row style={{ padding: "10px" }}>
          <Text strong>
            <Divider
              type="vertical"
              style={{ backgroundColor: "#1564D8", width: "5px" }}
            />
            社群榜
          </Text>
        </Row>
        <Divider style={{ margin: "0px auto" }} />
        <Row style={{ padding: "10px" }}>
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
        <Divider style={{ margin: "0px auto" }} />
        <Row>{view === "overview" ? <Overview /> : <Details />}</Row>
      </div>
    );
  }
}
