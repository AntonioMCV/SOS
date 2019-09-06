import React, { Component } from 'react';


import { AXAInput, AXAIpuntScripts} from 'axainput'

export default class InputsGuide extends Component {

    exampleFuction = e => alert("This is an example function when the input '"+ e.target.id + "' have a change." )

    render() {
        return (
            <div className="inputsguide">
                
                <h2 className="typo-title my-3">AXA Input</h2>
                <section id="information">
                    <div className="border p-3 mt-3">
                        <label className="my-3">Information:</label>
                        <div className="bg-secondary p-3">
                            Use the component "<b>{"<AXAInput />"}</b>" to render these form fields. <br /><br />
                            You can use the next <b>properties</b> in the component (<b>click on them to more info</b>):<br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    "<b data-toggle="collapse" data-target="#explain1" aria-expanded="false" aria-controls="explain1">name</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain2" aria-expanded="false" aria-controls="explain2">placeholder</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain3" aria-expanded="false" aria-controls="explain3">type</b>" <br />
                                </div>
                                <div className="col-md-2">
                                    "<b data-toggle="collapse" data-target="#explain4" aria-expanded="false" aria-controls="explain4">value</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain5" aria-expanded="false" aria-controls="explain5">label</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain6" aria-expanded="false" aria-controls="explain6">infoText</b>" <br />
                                </div>
                                <div className="col-md-2">
                                    "<b data-toggle="collapse" data-target="#explain7" aria-expanded="false" aria-controls="explain7">maxlength</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain8" aria-expanded="false" aria-controls="explain8">onChange</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain9" aria-expanded="false" aria-controls="explain9">required</b>" <br />
                                </div>
                                <div className="col-md-2">
                                    "<b data-toggle="collapse" data-target="#explain10" aria-expanded="false" aria-controls="explain10">pattern</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain11" aria-expanded="false" aria-controls="explain11">patternInfo</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain12" aria-expanded="false" aria-controls="explain12">disabled</b>" <br />
                                </div>
                                <div className="col-md-2">
                                    "<b data-toggle="collapse" data-target="#explain13" aria-expanded="false" aria-controls="explain13">inputmode</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain14" aria-expanded="false" aria-controls="explain14">dataCount</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain15" aria-expanded="false" aria-controls="explain15">options</b>" <br />
                                </div>
                                <div className="col-md-2">
                                    "<b data-toggle="collapse" data-target="#explain16" aria-expanded="false" aria-controls="explain16">min</b>" <br />
                                    "<b data-toggle="collapse" data-target="#explain17" aria-expanded="false" aria-controls="explain17">max</b>" <br />
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="information">
                            <div id="explain1" className="collapse" data-parent="#information">
                                <label className="my-3">Name:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>name</b> and <b>id</b> in your input.
                                </div>
                            </div>
                            <div id="explain2" className="collapse" data-parent="#information">
                                <label className="my-3">Placeholder:</label>
                                <div className="bg-secondary p-3">
                                    To put an <b>information text</b> in your input.
                                </div>
                            </div>
                            <div id="explain3" className="collapse" data-parent="#information">
                                <label className="my-3">Type:</label>
                                <div className="bg-secondary p-3">
                                    To select the input <b>type</b>, between these values: (<b>"text", "password", "select", "textarea", "number", "switch", "radio", "checkbox"</b>.)
                                </div>
                            </div>
                            <div id="explain4" className="collapse" data-parent="#information">
                                <label className="my-3">Value:</label>
                                <div className="bg-secondary p-3">
                                    To put an input <b>defaultValue</b>.
                                </div>
                            </div>
                            <div id="explain5" className="collapse" data-parent="#information">
                                <label className="my-3">Label:</label>
                                <div className="bg-secondary p-3">
                                    To put an input <b>label</b> and <b>title</b>.
                                </div>
                            </div>
                            <div id="explain6" className="collapse" data-parent="#information">
                                <label className="my-3">Infotext:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>button</b> with <b>information</b> about field.
                                </div>
                            </div>
                            <div id="explain7" className="collapse" data-parent="#information">
                                <label className="my-3">Maxlength:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>character limit</b>.
                                </div>
                            </div>
                            <div id="explain8" className="collapse" data-parent="#information">
                                <label className="my-3">OnChange:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>script code</b> or call a <b>function</b> when the value of input will be change.
                                </div>
                            </div>
                            <div id="explain9" className="collapse" data-parent="#information">
                                <label className="my-3">Required:</label>
                                <div className="bg-secondary p-3">
                                    To put the <b>field</b> in required. It is <b>not available to radio inputs.</b>
                                </div>
                            </div>
                            <div id="explain10" className="collapse" data-parent="#information">
                                <label className="my-3">pattern:</label>
                                <div className="bg-secondary p-3">
                                    To put input <b>validation rules</b>.
                                </div>
                            </div>
                            <div id="explain11" className="collapse" data-parent="#information">
                                <label className="my-3">Pattern info:</label>
                                <div className="bg-secondary p-3">
                                    To show an <b>information text</b> when the pattern is fail.
                                </div>
                            </div>
                            <div id="explain12" className="collapse" data-parent="#information">
                                <label className="my-3">Disabled:</label>
                                <div className="bg-secondary p-3">
                                    To put the field in <b>disabled</b> mode.
                                </div>
                            </div>
                            <div id="explain13" className="collapse" data-parent="#information">
                                <label className="my-3">inputmode:</label>
                                <div className="bg-secondary p-3">
                                    To <b>change the keyboards</b> in mobiles and tablets devices, between these values: (<b>"none", "numeric", "tel", "decimal", "email", "url", "search"</b>).
                                </div>
                            </div>
                            <div id="explain14" className="collapse" data-parent="#information">
                                <label className="my-3">dataCount:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>character count</b> between these values: (<b>"up", "down"</b>). Only available in <b>textarea</b> inputs.
                                </div>
                            </div>
                            <div id="explain15" className="collapse" data-parent="#information">
                                <label className="my-3">options:</label>
                                <div className="bg-secondary p-3">
                                    To put <b>multiple options</b> in the field. Only available in <b>"Select", "Switch", "radio" and "checkbox"</b> inputs.
                                </div>
                            </div>
                            <div id="explain16" className="collapse" data-parent="#information">
                                <label className="my-3">min:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>minimun number</b>. Only available in <b>number</b> inputs.
                                </div>
                            </div>
                            <div id="explain17" className="collapse" data-parent="#information">
                                <label className="my-3">max:</label>
                                <div className="bg-secondary p-3">
                                    To put a <b>maximun number</b>. Only available in <b>number</b> inputs.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="texts">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Texts</h3>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson1" aria-expanded="false" aria-controls="collapseson1">
                                <AXAInput type="text" name="inp1" label="text field" placeholder="place holder text" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson2" aria-expanded="false" aria-controls="collapseson2">
                                <AXAInput type="text" name="inp2" value="This is a text field with a default value and empty label" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson3" aria-expanded="false" aria-controls="collapseson3">
                                <AXAInput type="text" name="inp3" label="text field with empty placeholder" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson4" aria-expanded="false" aria-controls="collapseson4">
                                <AXAInput type="text" name="inp4" label="text field with info icon" placeholder="place holder text" infoText="Insert your text info text here." />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson5" aria-expanded="false" aria-controls="collapseson5">
                                <AXAInput type="text" name="inp5" label="text field with onChange fuction" placeholder="write to call a function" onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson6" aria-expanded="false" aria-controls="collapseson6">
                                <AXAInput type="text" name="inp6" label="text field disabled" placeholder="place holder text" disabled />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson7" aria-expanded="false" aria-controls="collapseson7">
                                <AXAInput type="text" name="inp7" label="text required" placeholder="place holder text" required />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson8" aria-expanded="false" aria-controls="collapseson8">
                                <AXAInput type="text" name="inp8" label="text only letters" placeholder="place holder text" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" patternInfo="Write with only with letters." />
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Texts Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit texts</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson1">
                                    <div id="collapseson1" className="collapse" aria-labelledby="headingson1" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson1">default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="text" name="inp1" label="text field" placeholder="place holder text" /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson2" className="collapse" aria-labelledby="headingson2" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson2">Default value and empty label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp2" <b>value="This is a text field with a default value and empty label"</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson3" className="collapse" aria-labelledby="headingson3" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson3">Empty placeholder:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp3" label="text field with empty placeholder" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson4" className="collapse" aria-labelledby="headingson4" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson4">Info icon:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp4" <b>infoText="Insert your text info text here."</b> label="text field with info icon" placeholder="place holder text"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson5" className="collapse" aria-labelledby="headingson5" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson5">OnChange fuction:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp5" <b>onChange={'{this.exampleFuction}'}</b> label="text field with onChange fuction" placeholder="write to call a function"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson6" className="collapse" aria-labelledby="headingson6" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson6">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp6" label="text field disabled" placeholder="place holder text" <b>disabled</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson7" className="collapse" aria-labelledby="headingson7" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson7">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp7" label="text required"  placeholder="place holder text" <b>required</b>/>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson8" className="collapse" aria-labelledby="headingson8" data-parent="#accordionson1">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson8">Rules:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="text" name="inp8" <b>pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" patternInfo="Write with only with letters."</b> label="text only letters"  placeholder="place holder text" required />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="passwords">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Passwords</h3>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson9" aria-expanded="false" aria-controls="collapseson9">
                                <AXAInput type="password" name="inp9" label="password field" placeholder="place holder text" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson10" aria-expanded="false" aria-controls="collapseson10">
                                <AXAInput type="password" name="inp10" value="This is a password field with a default value and empty label" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson11" aria-expanded="false" aria-controls="collapseson11">
                                <AXAInput type="password" name="inp11" label="password field with empty placeholder" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson12" aria-expanded="false" aria-controls="collapseson12">
                                <div id="form-group-inp4" className="form-group">
                                    <label className="control-label">password field with info icon</label>
                                    <p className="alert alert-dismissible alert-info">This field is not available yet.</p>
                                </div>
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson13" aria-expanded="false" aria-controls="collapseson13">
                                <AXAInput type="password" name="inp12" label="password field onChange fuction" placeholder="write to call a function" onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson14" aria-expanded="false" aria-controls="collapseson14">
                                <AXAInput type="password" name="inp13" label="password field disabled" placeholder="place holder text" disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson15" aria-expanded="false" aria-controls="collapseson15">
                                <AXAInput type="password" name="inp14" label="password required" placeholder="place holder text" required />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson16" aria-expanded="false" aria-controls="collapseson16">
                                <AXAInput type="password" name="inp15" label="password with rules" required pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" patternInfo="Write a password with UpperCase, LowerCase, Number/SpecialChar and min 8 Chars" />
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Password Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit passwords</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson2">
                                    <div id="collapseson9" className="collapse" aria-labelledby="headingson9" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson9">default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="password" name="inp9" label="password field" placeholder="place holder text" /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson10" className="collapse" aria-labelledby="headingson10" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson10">Default value and empty label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp10" <b>value="This is a password field with a default value and empty label"</b>/>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson11" className="collapse" aria-labelledby="headingson11" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson11">Empty placeholder:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp11" label="password field with empty placeholder" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson12" className="collapse" aria-labelledby="headingson12" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson12">Info icon:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp?" <b>infoText="Insert your text info password here."</b> label="password field with info icon" placeholder="place holder text"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson13" className="collapse" aria-labelledby="headingson13" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson13">OnChange fuction:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp12" <b>onChange={'{this.exampleFuction}'}</b> label="password field onChange fuction" placeholder="write to call a function" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson14" className="collapse" aria-labelledby="headingson14" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson14">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp13" label="password field disabled" placeholder="place holder text" <b>disabled</b>/>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson15" className="collapse" aria-labelledby="headingson15" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson15">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp14" label="password required" placeholder="place holder text" <b>required</b>/>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson16" className="collapse" aria-labelledby="headingson16" data-parent="#accordionson2">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson16">Rules:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="password" name="inp15" <b>pattern="(?=^.{'{8,}'}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" patternInfo="Write a password with UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"</b> label="password with rules" required />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="selects">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Selects</h3>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson17" aria-expanded="false" aria-controls="collapseson17">
                                <AXAInput type="select" placeholder="select an option" name="inp16" label="select field" options={["option 1", "option 2", "option 3"]} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson18" aria-expanded="false" aria-controls="collapseson18">
                                <AXAInput value="2" type="select" placeholder="select an option" name="inp17" options={["option 1", "default value and empty label", "option 3"]} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson19" aria-expanded="false" aria-controls="collapseson19">
                                <AXAInput type="select" name="inp18" label="select empty placeholder" options={["option 1", "option 2", "option 3"]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson20" aria-expanded="false" aria-controls="collapseson20">
                                <AXAInput type="select" placeholder="select an option" name="inp19" label="select with info icon" options={["option 1", "option 2", "option 3"]} infoText="Insert your text info select here." />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson21" aria-expanded="false" aria-controls="collapseson21">
                                <AXAInput placeholder="select an option" type="select" name="inp20" label="select on change function" options={["option 1", "option 2", "option 3"]} onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson22" aria-expanded="false" aria-controls="collapseson22">
                                <AXAInput placeholder="select an option" type="select" name="inp21" label="select disabled" options={["option 1", "option 2", "option 3"]} disabled />
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson23" aria-expanded="false" aria-controls="collapseson23">
                                <AXAInput type="select" placeholder="select an option" name="inp22" label="select required" options={["option 1", "option 2", "option 3"]} required />
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Select Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit selects</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson3">
                                    <div id="collapseson17" className="collapse" aria-labelledby="headingson17" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson17">default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="select" placeholder="select an option" name="inp16" label="select field" options={'{["option 1", "option 2", "option 3"]}'}/></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson18" className="collapse" aria-labelledby="headingson18" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson18">Default value and empty label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput <b>value="2"</b> type="select"  placeholder="select an option" name="inp17" options={'{["option 1", "default value and empty label", "option 3"]}'}/>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson19" className="collapse" aria-labelledby="headingson19" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson19">Empty placeholder:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="select" name="inp18" label="select empty placeholder" options={'{["option 1", "option 2", "option 3"]}'}/>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson20" className="collapse" aria-labelledby="headingson20" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson20">Info icon:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="select" <b>infoText="Insert your text info select here."</b> placeholder="select an option" name="inp19" label="select with info icon" options={'{["option 1", "option 2", "option 3"]}'} />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson21" className="collapse" aria-labelledby="headingson21" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson21">OnChange fuction:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="select" <b>onChange={'{this.exampleFuction}'}</b> placeholder="select an option"  name="inp20" label="select on change function" options={'{["option 1", "option 2", "option 3"]}'} />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson22" className="collapse" aria-labelledby="headingson22" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson22">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="select" <b>disabled</b> placeholder="select an option" name="inp21" label="select disabled" options={'{["option 1", "option 2", "option 3"]}'} />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson23" className="collapse" aria-labelledby="headingson23" data-parent="#accordionson3">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson23">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="select" <b>required</b> placeholder="select an option" name="inp22" label="select required" options={'{["option 1", "option 2", "option 3"]}'} />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="textareas">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">TextAreas</h3>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson24" aria-expanded="false" aria-controls="collapseson24">
                                <AXAInput type="textArea" name="inp23" label="Textarea Field" placeholder="place holder text" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson25" aria-expanded="false" aria-controls="collapseson25">
                                <AXAInput type="textArea" name="inp24" placeholder="place holder text" value="This is a textarea field with a default value and empty label" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson26" aria-expanded="false" aria-controls="collapseson26">
                                <AXAInput type="textArea" name="inp25" label="Textarea with empty placeholder" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson27" aria-expanded="false" aria-controls="collapseson27">
                                <AXAInput type="textArea" name="inp26" label="Textarea with info icon" placeholder="place holder text" infoText="Insert your text info textarea here." />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson28" aria-expanded="false" aria-controls="collapseson28">
                                <AXAInput type="textArea" name="inp27" label="Textarea on change function" placeholder="place holder text" onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson29" aria-expanded="false" aria-controls="collapseson29">
                                <AXAInput type="textArea" name="inp28" label="Textarea disabled" placeholder="place holder text" disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson30" aria-expanded="false" aria-controls="collapseson30">
                                <AXAInput type="textArea" name="inp29" label="Textarea countdown caracters field" placeholder="place holder text" maxlength="250" dataCount="up" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson31" aria-expanded="false" aria-controls="collapseson31">
                                <AXAInput type="textArea" name="inp30" label="Textarea countdown caracters field" placeholder="place holder text" maxlength="250" dataCount="down" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson32" aria-expanded="false" aria-controls="collapseson32">
                                <AXAInput type="textArea" name="inp31" label="Textarea required" placeholder="place holder text" required />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson33" aria-expanded="false" aria-controls="collapseson33">
                                <AXAInput type="textArea" name="inp32" label="Textarea only letters" placeholder="place holder text" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" patternInfo="Write with only with letters." />
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Textarea Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit textarea</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson4">
                                    <div id="collapseson24" className="collapse" aria-labelledby="headingson24" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson24">default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="textArea" name="inp23" label="Textarea Field" placeholder="place holder text" /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson25" className="collapse" aria-labelledby="headingson25" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson25">Default value and empty label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp24" placeholder="place holder text" <b>value="This is a textarea field with a default value and empty label"</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson26" className="collapse" aria-labelledby="headingson26" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson26">Empty placeholder:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                        {'<'}AXAInput type="textArea" name="inp25" label="Textarea with empty placeholder" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson27" className="collapse" aria-labelledby="headingson27" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson27">Info icon:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp26" <b>infoText="Insert your text info textarea here."</b> label="Textarea with info icon" placeholder="place holder text" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson28" className="collapse" aria-labelledby="headingson28" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson28">OnChange fuction:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp27" <b>onChange={'{this.exampleFuction}'}</b> label="Textarea on change function" placeholder="place holder text"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson29" className="collapse" aria-labelledby="headingson29" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson29">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp28" label="Textarea disabled" placeholder="place holder text" <b>disabled</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson30" className="collapse" aria-labelledby="headingson30" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson30">Textarea countdown caracters field:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp29" <b>maxlength="250" dataCount="up"</b> label="Textarea countdown caracters field" placeholder="place holder text"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson31" className="collapse" aria-labelledby="headingson31" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson31">Textarea countdown caracters field:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp30" <b>maxlength="250" dataCount="down"</b> label="Textarea countdown caracters field" placeholder="place holder text"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson32" className="collapse" aria-labelledby="headingson32" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson32">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp31" label="Textarea required" placeholder="place holder text" <b>required</b> />
                                            </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson33" className="collapse" aria-labelledby="headingson33" data-parent="#accordionson4">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson33">Rules:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="textArea" name="inp32" <b>pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" patternInfo="Write with only with letters."</b> label="Textarea only letters" placeholder="place holder text" required  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="numbers">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Numbers</h3>
                        <div className="alert alert-dismissible alert-info">
                            <button type="button" className="close" data-dismiss="alert">×</button>
                            If you do not like the behavior of numbers, you can always use "<b>type text</b>" as number with the "<b>inputmode</b>" property in "<b>decimal</b>" or "<b>numeric</b>" value, so that when browsing with mobiles the numerical keyboards appears.
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson34" aria-expanded="false" aria-controls="collapseson34">
                                <AXAInput type="number" name="inp33" label="number field" placeholder="1234567890" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson35" aria-expanded="false" aria-controls="collapseson35">
                                <AXAInput type="number" name="inp34" value="99999999999" />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson36" aria-expanded="false" aria-controls="collapseson36">
                                <AXAInput type="number" name="inp35" label="number with empty placeholder" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson37" aria-expanded="false" aria-controls="collapseson37">
                                <AXAInput type="number" name="inp36" label="number with info icon" placeholder="1234567890" infoText="Insert your text info number here." />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson38" aria-expanded="false" aria-controls="collapseson38">
                                <AXAInput type="number" name="inp37" label="number on change function" placeholder="1234567890" onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson39" aria-expanded="false" aria-controls="collapseson39">
                                <AXAInput type="number" name="inp38" label="number disabled" placeholder="1234567890" disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson40" aria-expanded="false" aria-controls="collapseson40">
                                <AXAInput type="number" name="inp39" label="number required" placeholder="1234567890" required />
                            </div>
                            <div className="col-md-4" data-toggle="collapse" data-target="#collapseson41" aria-expanded="false" aria-controls="collapseson41">
                                <AXAInput type="number" name="inp40" label="numbers with min and max field" min="0" max="10" pattern="[0-9]+" patternInfo="Only natural numbers, please insert a range value between 0 and 10" required />
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Number Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit number</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson5">
                                    <div id="collapseson34" className="collapse" aria-labelledby="headingson34" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson34">default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="number" name="inp33" label="number field" placeholder="1234567890" /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson35" className="collapse" aria-labelledby="headingson35" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson35">Default value and empty label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp34" <b>value="99999999999"</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson36" className="collapse" aria-labelledby="headingson36" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson36">Empty placeholder:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp35" label="number with empty placeholder" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson37" className="collapse" aria-labelledby="headingson37" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson37">Info icon:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp36" <b>infoText="Insert your text info number here."</b> label="number with info icon" placeholder="1234567890" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson38" className="collapse" aria-labelledby="headingson38" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson38">OnChange fuction:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp37" <b>onChange={'{this.exampleFuction}'}</b> label="number on change function" placeholder="1234567890"  />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson39" className="collapse" aria-labelledby="headingson39" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson39">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp38" label="number disabled" placeholder="1234567890" <b>disabled</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="collapseson40" className="collapse" aria-labelledby="headingson40" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson40">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp39" label="number required" placeholder="1234567890" <b>required</b> />
                                            </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson41" className="collapse" aria-labelledby="headingson41" data-parent="#accordionson5">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson41">Rules:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="number" name="inp40" <b>min="0" max="10" pattern="[0-9]+" patternInfo="Only natural numbers, please insert a range value between 0 and 10"</b> label="numbers with min and max field" required />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="switchs">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Switchs</h3>
                        <div className="row">
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson42" aria-expanded="false" aria-controls="collapseson42">
                                <AXAInput type="switch" name="inp41" label="switch Normal" />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson43" aria-expanded="false" aria-controls="collapseson43">
                                <AXAInput type="switch" name="inp42" label="switch Default value" value={true} />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson44" aria-expanded="false" aria-controls="collapseson44">
                                <AXAInput type="switch" name="inp43" label="switch on change" onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson45" aria-expanded="false" aria-controls="collapseson45">
                                <AXAInput type="switch" name="inp44" label="switch Disabled" disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson46" aria-expanded="false" aria-controls="collapseson46">
                                <AXAInput type="switch" name="inp45" />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson47" aria-expanded="false" aria-controls="collapseson47">
                                <AXAInput type="switch" name="inp46" label="switch Required" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 offset-md-9">
                                <div className="form-group">
                                    <label>Switch Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit switch</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson6">
                                    <div id="collapseson42" className="collapse" aria-labelledby="headingson42" data-parent="#accordionson6">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson42">Default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="switch" name="inp41" label="switch Normal" /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson43" className="collapse" aria-labelledby="headingson43" data-parent="#accordionson6">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson43">Default value:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="switch" name="inp42" label="switch Default value" <b>value={'{true}'}</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson44" className="collapse" aria-labelledby="headingson44" data-parent="#accordionson6">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson44">onChange:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="switch" name="inp43" label="switch on change" <b>onChange={'{this.exampleFuction}'}</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson45" className="collapse" aria-labelledby="headingson45" data-parent="#accordionson6">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson45">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="switch" name="inp44" label="switch Disabled" <b>disabled</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson46" className="collapse" aria-labelledby="headingson46" data-parent="#accordionson6">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson46">Empty Label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="switch" name="inp45" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson47" className="collapse" aria-labelledby="headingson47" data-parent="#accordionson6">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson47">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="switch" name="inp46" label="switch Required" <b>required</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="checks">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Checks</h3>
                        <div className="row">
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson48" aria-expanded="false" aria-controls="collapseson48">
                                <AXAInput type="checkbox" name="inp47" label="Checkbox Normal" />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson49" aria-expanded="false" aria-controls="collapseson49">
                                <AXAInput type="checkbox" name="inp48" label="Checkbox Default value" value={true} />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson50" aria-expanded="false" aria-controls="collapseson50">
                                <AXAInput type="checkbox" name="inp49" label="Checkbox on change" onChange={this.exampleFuction} />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson51" aria-expanded="false" aria-controls="collapseson51">
                                <AXAInput type="checkbox" name="inp50" label="Checkbox Disabled" disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson52" aria-expanded="false" aria-controls="collapseson52">
                                <AXAInput type="checkbox" name="inp51" />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson53" aria-expanded="false" aria-controls="collapseson53">
                                <AXAInput type="checkbox" name="inp52" label="checkbox Required" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 offset-md-9">
                                <div className="form-group">
                                    <label>Checkbox Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit checkbox</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson7">
                                    <div id="collapseson48" className="collapse" aria-labelledby="headingson48" data-parent="#accordionson7">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson48">Default:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="checkbox" name="inp47" label="Checkbox Normal" /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson49" className="collapse" aria-labelledby="headingson49" data-parent="#accordionson7">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson49">Default value:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="checkbox" name="inp48" label="Checkbox Default value" <b>value={'{true}'}</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson50" className="collapse" aria-labelledby="headingson50" data-parent="#accordionson7">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson50">onChange:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="checkbox" name="inp49" label="Checkbox on change" <b>onChange={'{this.exampleFuction}'}</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson51" className="collapse" aria-labelledby="headingson51" data-parent="#accordionson7">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson51">Disabled:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="checkbox" name="inp50" label="Checkbox Disabled" <b>disabled</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson52" className="collapse" aria-labelledby="headingson52" data-parent="#accordionson7">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson52">Empty Label:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="checkbox" name="inp51" />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson53" className="collapse" aria-labelledby="headingson53" data-parent="#accordionson7">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson53">Required:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    {'<'}AXAInput type="checkbox" name="inp52" label="checkbox Required" <b>required</b> />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="groups">
                    <form className="forms needs-validation" noValidate>
                        <h3 className="typo-title my-3">Switchs, Checks & Radios in Groups</h3>
                        <div className="row">
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson54" aria-expanded="false" aria-controls="collapseson54">
                                <AXAInput type="switch" name="inp53" label="Group Switch inputs:" options={[
                                    {
                                        "label": "Normal"
                                    },
                                    {
                                        "label": "Default value",
                                        "value": true
                                    },
                                    {
                                        "label": "on change",
                                        "onChange": this.exampleFuction
                                    },
                                    {
                                        "label": "Disabled",
                                        "disabled": true
                                    },
                                    {
                                        "label": "Required",
                                        "required": true
                                    },
                                ]} />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson55" aria-expanded="false" aria-controls="collapseson55">
                                <AXAInput type="radio" name="inp54" label="Group Radio inputs:" options={[
                                    {
                                        "label": "Normal"
                                    },
                                    {
                                        "label": "Default value",
                                        "value": true
                                    },
                                    {
                                        "label": "on change",
                                        "onChange": this.exampleFuction
                                    },
                                    {
                                        "label": "Disabled",
                                        "disabled": true
                                    }
                                ]} />
                            </div>
                            <div className="col-md-3" data-toggle="collapse" data-target="#collapseson56" aria-expanded="false" aria-controls="collapseson56">
                                <AXAInput type="checkbox" name="inp55" label="Group Checkbox inputs:" options={[
                                    {
                                        "label": "Normal"
                                    },
                                    {
                                        "label": "Default value",
                                        "value": true
                                    },
                                    {
                                        "label": "on change",
                                        "onChange": this.exampleFuction
                                    },
                                    {
                                        "label": "Disabled",
                                        "disabled": true
                                    },
                                    {
                                        "label": "Required",
                                        "required": true
                                    },
                                ]} />
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Groups Validations</label>
                                    <button type="submit" className="btn btn-primary col">submit groups</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionson8">
                                    <div id="collapseson54" className="collapse" aria-labelledby="headingson54" data-parent="#accordionson8">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson54">Switch:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="switch" name="inp53" label="Group Switch inputs:" <br />
                                                        {'  '}options={'{['} <br/>
                                                        {'      {'}<br />
                                                        {'          '}"label": "Normal"<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Default value",<br />
                                                        {'          '}"value": true<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "on change",<br />
                                                        {'          '}"value": this.exampleFuction<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Disabled",<br />
                                                        {'          '}"disabled": true<br />
                                                        {'      }'}<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Required",<br />
                                                        {'          '}"required": true<br />
                                                        {'      }'}<br />
                                                        {'  ]}'} /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson55" className="collapse" aria-labelledby="headingson55" data-parent="#accordionson8">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson55">Radio:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="radio" name="inp53" label="Group Radio inputs:" <br />
                                                        {'  '}options={'{['} <br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Normal"<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Default value",<br />
                                                        {'          '}"value": true<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "on change",<br />
                                                        {'          '}"value": this.exampleFuction<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Disabled",<br />
                                                        {'          '}"disabled": true<br />
                                                        {'      }'}<br />
                                                        {'  ]}'} /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseson56" className="collapse" aria-labelledby="headingson56" data-parent="#accordionson8">
                                        <div className="border p-3">
                                            <label className="my-3" id="headingson56">Checkbox:</label>
                                            <div className="bg-secondary p-3">
                                                <pre className="mb-0">
                                                    <b>{'<'}AXAInput type="checkbox" name="inp53" label="Group Checkbox inputs:" <br />
                                                        {'  '}options={'{['} <br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Normal"<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Default value",<br />
                                                        {'          '}"value": true<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "on change",<br />
                                                        {'          '}"value": this.exampleFuction<br />
                                                        {'      }'},<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Disabled",<br />
                                                        {'          '}"disabled": true<br />
                                                        {'      }'}<br />
                                                        {'      {'}<br />
                                                        {'          '}"label": "Required",<br />
                                                        {'          '}"required": true<br />
                                                        {'      }'}<br />
                                                        {'  ]}'} /></b>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <AXAIpuntScripts/>
            </div>
        )
    }
}
