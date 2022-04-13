import React, { Component } from 'react'
import { Table, Tag, Space, Input, Checkbox } from 'antd';
import './tablecomp.css'
import { connect } from 'react-redux';
import { Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import {Action} from './Action/Action'



class Tablecomp extends Component {

  constructor(props) {
    super(props)



    var today = new Date(),
      time = today.getHours() + ':' + today.getMinutes();


    this.state = {
      currentTime: time,
      datatable:

        this?.props?.tabledata,
      isEdit: false,
      title: "",
      status: false




    }


  }

  columns = [

    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Completed',
      render: record => {
        return <>

          {record.completed.toString()}


        </>
      },
      key: 'completed',
    },
    {
      title: 'Date',

      key: 'date',
      render: record => {
        return <>
          {this.state.currentTime}
        </>
      }
    },

    {
      title: 'Action',
      key: 'aciton',
      render: record => {
        return <>

          <EditOutlined onClick={() => this.onEdit(record)} />
          <DeleteOutlined onClick={() => this.onDelete(record)} style={{ color: "red", marginLeft: 12 }} />


        </>
      }


    }]

  onEdit = (record) => {
    this.setState({ isEdit: true })
    this.setState({ editDetails: { ...record } })
  }
  onResetEdit = () => {
    this.setState({ isEdit: false })
    this.setState({ editDetails: null })
  }
  render() {
    console.log(this.props.getd)
    return (
      <>

        <div className="bu">
          <Button type="primary" onClick={this.onEdit}>
            Add new Detalis
          </Button >
        </div>
        <Table columns={this.columns} dataSource={this.props.response.filter(val => val.completed === false) || []}></Table>
        <Modal title="Edit details"
          visible={this.state.isEdit}
          okText="Save"
          onCancel={() => { this.onResetEdit() }}
          onOk={(e) => {
            e.preventDefault();
            if (this.state.title && this.state.status) {
             
            }


          }}>


          <form>
            <h1 >
              ADD TASK-TODO
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}

              />
            </label>
            <label htmlFor="type">
              Status
              <select
                id="type"
                value={this.state.status}
                onChange={(e) => this.setState({ status: e.target.value })}
              >
                <option value="False">False</option>
                <option value="True">True</option>
              </select>
            </label>
          </form>


        </Modal>
      </>
    )
  }
}
const mapStateToProps = (props) => {
  return {
  getd:props.reducer,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   getdetails:()=>dispatch(Action())

  }
}
export default connect(mapDispatchToProps, mapStateToProps)(Tablecomp);