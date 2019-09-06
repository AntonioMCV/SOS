import React, { Component } from 'react'
import PropTypes from "prop-types";

import {AXAInput} from 'axainput'
import './AssetsTable.scss'

export default class AssetsTable extends Component {



    render() {

        return (
            <div className="assets-table my-5">
                
                {this.props.stateSelected ? (
                    <div className="inner">
                        <button className="btn btn-outline-primary bg-white" onClick={() => { this.props.goTo("newAsset", "bg-dashboard", "bg-config") }}>Add a {this.props.entitySelectedText} Asset</button>

                        <ul className="palette-alabaster p-3 mt-3">
                            <li className="row my-5 my-md-2 py-2 d-none d-md-flex">
                                <div className="col-md-4 text-left">
                                    <b className="pl-3">Asset</b>
                                </div>
                                <div className="col-md-2 text-center">
                                    <b>Code ID</b>
                                </div>
                                <div className="col-md-1 text-center">
                                    <b>State</b>
                                </div>
                                <div className="col-md-2 text-center">
                                    <b>Last Date</b>
                                </div>
                                <div className="col-md-2 text-right">
                                    <b className="pr-md-2">ByPass</b>
                                </div>
                                <div className="col-md-1 text-center">
                                    <b>Delete</b>
                                </div>
                            </li>
                            {this.props.stateSelected.map(asset =>
                                <li className="row my-2 py-3 my-md-2 py-md-0 item-list" key={asset.id}>
                                    <div className="col-md-4 link">
                                        <button className="text-primary font-weight-bold col d-md-inline-block text-md-left mb-3 mb-md-0" onClick={() => {this.props.goTo("editAsset", "bg-dashboard", "bg-config", asset.id)}}>{asset.name}</button>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        {//asset.id
                                        }
                                        {Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6)
                                        }
                                    </div>
                                    <div className="col-md-1 text-center">
                                        {asset.status ? <b className="text-success">Ok</b> : <b className="text-danger">Fail</b>}
                                    </div>
                                    <div className="col-md-2 text-center">
                                        {asset.date}
                                    </div>
                                    <div className="col-md-2 text-center text-md-right ml-4 ml-md-0">
                                        <AXAInput type="switch" name={asset.id} value={asset.bypass ? true : false} onChange={() => {
                                            asset.bypass = !asset.bypass;
                                            this.props.editAsset(asset);
                                        }}/>
                                    </div>
                                    <div className="col-md-1 text-center">
                                        <button type="button" className="buttonremove badge badge-pill badge-danger rounded-circle" onClick={this.props.delete.bind(this, asset.id)}>x</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                ):(
                    null
                )}

            </div>
        )
    }
}

AssetsTable.propTypes = {
    goTo: PropTypes.func.isRequired,
    appState: PropTypes.object.isRequired,
    entityChange: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    stateSelected: PropTypes.array,
    selectValue: PropTypes.string,
    entitySelectedText: PropTypes.string.isRequired,
    editAsset: PropTypes.func.isRequired,
}