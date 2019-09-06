import React, { Component } from 'react'
import PropTypes from "prop-types"


import { AXAInput, AXAIpuntScripts } from 'axainput'

import './AssetConfig.scss'


export default class AssetConfig extends Component {
    state = {
        
    }

    componentWillMount() {
        if (this.props.assetToEdit) {
            this.props.assetToEdit.map(asset => {
                this.setState({
                    id: asset.id,
                    name: asset.name,
                    tools: asset.tools,
                    critical: asset.critical,
                    medium: asset.medium,
                    low: asset.low,
                    status: asset.status,
                    entity: asset.entity,
                    date: asset.date,
                    bypass: asset.bypass
                });
                return true;
            })
        }
        else {
            if (!this.props.entitySelectedText) {
                //redirect if the user did not choice a entity firts
                this.props.goTo("home");
            }
        }
    }
    componentDidMount() {
        const _this = this;

        setTimeout(function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            // eslint-disable-next-line
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === true) {
                        event.preventDefault();
                        
                        if (_this.props.assetToEdit === undefined) {
                            function actualDate() {
                                let today = new Date();
                                let dd = today.getDate();
                                let mm = today.getMonth() + 1; //January is 0!

                                const yy = today.getYear().toString().substr(-2);
                                if (dd < 10) {
                                    dd = '0' + dd;
                                }
                                if (mm < 10) {
                                    mm = '0' + mm;
                                }
                                today = dd + '/' + mm + '/' + yy;
                                return today;
                            };

                            _this.setState({
                                id: _this.props.assetsMaxId + 1,
                                status: true,
                                date: (actualDate()),
                                bypass: false,
                                entity: _this.props.entitySelectedText
                            });
                            _this.props.addNewAsset(_this.state);
                        }
                        else {
                            _this.props.editAsset(_this.state);
                        }
                    }
                }, false);
            });
        }, 0)
    }

    toolsChange () {
        this.setState({
            tools: document.getElementById("tools").value
        });
        document.getElementById("toolSettings").removeAttribute("hidden");
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onChangeMail = () => {
        const invalidFeedback = document.querySelector("#form-group-mail .invalid-feedback");
        const mail = document.getElementById("mail");
        mail.setCustomValidity("");

        function error(errorText) {
            invalidFeedback.innerHTML = errorText;
            mail.setCustomValidity(errorText);
        }

        if (mail.checkValidity()) {
            
            const mailValue = mail.value;
            const list_p = document.querySelectorAll("#list p");
            let hasMail = false;

            if (list_p) {
                list_p.forEach(function (element) {
                    if (mailValue === element.textContent) {
                        hasMail = true;
                    }
                });
            }

            if (!hasMail) {
                mail.setCustomValidity("");
            }
            else {
                error("The mail is in the list");
            }
        }
        else {
            error(mail.getAttribute("patternInfo"));
        }
    }

    addMail = () => {
        const mail = document.getElementById("mail");
        const invalidFeedback = document.querySelector("#form-group-mail .invalid-feedback");
        mail.setCustomValidity("");

        document.getElementById("form-group-mail").setAttribute("class", "form-group was-validated");

        function error(errorText) {
            invalidFeedback.innerHTML = errorText;
            mail.setCustomValidity(errorText);
        }

        if (mail.checkValidity()) {
            const list = document.getElementById("list");
            const mailValue = mail.value;
            const list_p = document.querySelectorAll("#list p");

            if (mailValue !== "") {
                let hasMail = false;

                if (list_p) {
                    list_p.forEach(function (element) {
                        if (mailValue === element.textContent) {
                            hasMail = true;
                        }
                    });
                }

                if (!hasMail) {
                    const cite = document.querySelector("#list cite");
                    const node = document.createElement("p");
                    const textnode = document.createTextNode(mailValue);
                    node.appendChild(textnode);
                    list.appendChild(node);
                    cite.setAttribute("hidden", true);
                    mail.value = "";
                    mail.setCustomValidity("");
                }
                else {
                    error("The email already exists in the list");
                }
            }
        }
        else {
            error(mail.getAttribute("patternInfo"));
        }
    }

    render() {

        return (
            <section className="my-5 config">
                <div className="my-5">
                    <h2 className="typo-title text-center">{this.props.title}</h2>
                    {this.props.assetToEdit ? (<h3 className="typo-title text-center">{this.state.name}</h3>) : null}
                </div>
                <button className="btn btn-outline-primary mb-4" onClick={() => this.props.goTo("home", "bg-config", "bg-dashboard")}>Return to Dashboard</button>
                <form className="forms needs-validation" onSubmit={this.onSubmit} noValidate>
                    <div className="palette-alabaster py-4 px-3 px-sm-5">
                        <div className="row">

                            <div className="col pl-md-5"   id="toolSettings">
                                <h5 className="mb-4">Code Tools Settings </h5>
                                <div className="row">
                                    <div className="col-md-6">
                                         <div className="row">
                                            <div className="col-md-6">
                                                <AXAInput value={this.state.critical ? this.state.critical : "0"} type="text" name="critical" label="Critical max:" onChange={this.onChange} required pattern="[0-9]{1,3}" patternInfo="Only natural numbers, three digits maximum" inputmode="decimal" />
                                            </div>
                                            <div className="col-md-6">
                                                <AXAInput value={this.state.critical ? this.state.critical : "0"} type="text" name="Hight" label="Hight max:" onChange={this.onChange} required pattern="[0-9]{1,3}" patternInfo="Only natural numbers, three digits maximum" inputmode="decimal" />
                                            </div>
                                         </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <AXAInput value={this.state.medium ? this.state.medium : "0"} type="text" name="medium" label="Medium max:" onChange={this.onChange} required pattern="[0-9]{1,3}" patternInfo="Only natural numbers, three digits maximum" inputmode="decimal" />
                                            </div>
                                            <div className="col-md-6">
                                                <AXAInput value={this.state.low ? this.state.low : "0"} type="text" name="low" label="Low max:" onChange={this.onChange} required pattern="[0-9]{1,3}" patternInfo="Only natural numbers, three digits maximum" inputmode="decimal" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <AXAInput type="textArea" name="settings" label="Settings:" placeholder="Write with a json format your settings" onChange={this.onChange} required />
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    <div className="palette-alabaster py-4 px-3 px-sm-5 mt-4">
                        <div className="row  needs-validation" noValidate>
                            <div className="col-10 col-md-5">
                                <AXAInput id="mail" type="text" name="mail" label="Add a eMail to the list:" placeholder="name@domain.com" infoText="All emails will receive information about these changes." onChange={this.onChangeMail} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}" patternInfo="Write a correct format eMail: 'name@domain.com' or let the field empty, this input form is not required."/>
                            </div>
                            <div className="col-2 col-md-1 pr-lg-5" >
                                <button type="button" className="buttonplus badge badge-pill badge-primary rounded-circle button-plus" onClick={this.addMail}>+</button>
                            </div>
                            <div className="col-md-6 pl-md-5">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="low">Mail list:</label>
                                    <p id="list">
                                        <cite>You don't have any mail in the list yet.</cite>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-4">
                        <button type="button" className="btn btn-outline-primary mr-4" onClick={() => this.props.goTo("home", "bg-config", "bg-dashboard")}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
                <AXAIpuntScripts/>
            </section>
        )
    }
}

AssetConfig.propTypes = {
    goTo: PropTypes.func.isRequired,
    title: PropTypes.string,
    addNewAsset: PropTypes.func,
    entitySelectedText: PropTypes.string,
    assetsMaxId: PropTypes.number
}
