import React, { Component } from 'react'
import PropTypes from "prop-types"

import './AssetsDashboard.svg';
import './AssetsDashboard.scss';
//components

import { AXAInput, AXAIpuntScripts } from 'axainput'
import AssetsTable from './AssetsTable'

export default class Dashboard extends Component {

    //select options from JSON
    entities = this.props.state.assets.map(asset => asset.entity);
    entitiesFilter = [...new Set(this.entities)];

    componentDidMount() {


        if (this.props.entitySelectedText) {
            setTimeout(() => {
                const select = document.getElementById("entity");
                const selectStyled = document.getElementsByClassName("select-styled")[0];
                select.value = this.props.selectValue;
                selectStyled.innerText = this.props.entitySelectedText;
            }, 0);
        }
    }

    render() {
        return (
            <section className="dashboard">
                <h2 className="typo-title mt-5 mb-3 text-center">Dashboard</h2>
                <div className="row">
                    <div className="col-md-4 offset-md-4 text-center">
                        <AXAInput type="select" name="entity" label="Entity:" placeholder="Select your entity" options={this.entitiesFilter} onChange={this.props.entityChange} />
                        <AXAIpuntScripts/>
                    </div>
                </div>
                <AssetsTable appState={this.props.state} stateSelected={this.props.stateSelected} delete={this.props.deleteAsset} goTo={this.props.goTo} entitySelectedText={this.props.entitySelectedText} editAsset={this.props.editAsset} selectValue={this.props.selectValue} entityChange={this.props.entityChange}/>
            </section>
        )
    }
}

Dashboard.propTypes = {
    goTo: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    entityChange: PropTypes.func.isRequired,
    deleteAsset: PropTypes.func.isRequired,
    stateSelected: PropTypes.array,
    selectValue: PropTypes.string,
    entitySelectedText: PropTypes.string.isRequired,
    editAsset: PropTypes.func.isRequired,
}
