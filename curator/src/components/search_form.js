
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {

    renderInput(field) {
        return (
            <div className={field.className}>
                <label>{ field.label }</label>
                <input type="search"
                    className='form-control'
                    placeholder={ field.placeholder }
                    { ...field.input } />
            </div>
        );
    }

    renderRangeControl(field) {
        return (
            <div className={ field.className } >
                <label>{ field.label }</label>
                <div>
                    <input type="range"
                        className="form-control"
                        min="0"
                        max="9999"
                        placeholder="minimalPrice"
                    />
                </div>
                <div>
                    Max:
                    <input type="range"
                        className="form-control"
                        min="0"
                        max="9999"
                        placeholder="maximalPrice"
                    />
                </div>
            </div>
        );
    }

    renderCheckControl(field) {
        return (
            <div className={ field.className }>
                <label className="form-check-label">
                    <input type="checkbox"
                        className="form-check-input"
                        { ...field.input } />
                    { field.label }
                </label>
            </div>
        );
    }

    render() {
        return (
            <div className='form'>
                <form>
                    <div className="form-row">
                        <Field label="Merchant:"
                            name="merchant"
                            placeholder="比如:Neiman"
                            className="col-md-6 form-group"
                            component={this.renderInput} />
                        <Field label="Brand:"
                            name="brand"
                            placeholder="比如:Coach"
                            className="col-md-6 form-group"
                            component={this.renderInput} />
                        <Field label="Product Name:"
                            name="productName"
                            placeholder="比如:HYDRA BEAUTY Micro Sérum"
                            className="col-md-6 form-group"
                            component={this.renderInput} />
                        <Field label="Product IDs:"
                            name="productID"
                            placeholder="比如:6pm_8057539"
                            className="col-md-6 form-group"
                            component={this.renderInput} />
                        <Field label="Label:"
                            name="label"
                            placeholder="比如:on_sale"
                            className="col-md-6 form-group"
                            component={this.renderInput} />

                        <Field label="Price Range(USD):"
                            name="range"
                            className="col-md-6 form-group"
                            component={this.renderRangeControl} />
                    </div>
                    <Field label="Bypass Cache"
                        name="cache"
                        className="form-check col-md-6 form-group"
                        component={this.renderCheckControl} />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'searchForm'
})(SearchForm);
