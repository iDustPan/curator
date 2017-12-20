
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import MerchantsSelector from '../containers/MerchantsContainer';
import BrandsSelector from '../containers/BrandsContainer';

class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    renderInput(field) {
        const { meta: { touched, error } } = field;
        // const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={field.className}>
                <label>{ field.label }</label>
                <input type="search"
                    className='form-control'
                    placeholder={ field.placeholder }
                    { ...field.input } />
                <div className="text-help">
                    {/* {touched ? error : ''} */}
                </div>
            </div>
        );
    }

    renderRangeControl(field) {
        return (
            <div className={ field.className } >
                <label>{ field.label }</label>
                <div className="form-inline">
                    <input type="number"
                        className="form-control col-md-3"
                        min="0"
                        max="9999"
                        placeholder="from"
                    />
                    <input type="number"
                        className="form-control col-md-3 mg_lf_sm"
                        min="0"
                        max="9999"
                        placeholder="to"
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

    renderMerchantControl(field) {
        return <MerchantsSelector field={ field } />
    }

    renderBrandControl(field) {
        return <BrandsSelector field={ field } />
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className='form'>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="form-row">
                        <Field label="Merchant:"
                            name="merchant"
                            placeholder="比如:Neiman"
                            className="col-md-3 form-group"
                            component={this.renderMerchantControl} />
                        <Field label="Brand:"
                            name="brand"
                            placeholder="比如:Coach"
                            className="col-md-3 form-group"
                            component={this.renderBrandControl} />
                        <Field label="Product Name:"
                            name="productName"
                            placeholder="比如:HYDRA BEAUTY Micro Sérum"
                            className="col-md-3 form-group"
                            component={this.renderInput} />
                        <Field label="Product IDs:"
                            name="productID"
                            placeholder="比如:6pm_8057539"
                            className="col-md-3 form-group"
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
                        <Field label="Bypass Cache"
                            name="cache"
                            className="form-check col-md-3 form-group from-inline"
                            component={this.renderCheckControl} />
                        <Field label="include sold out"
                            name="soldout"
                            className="form-check col-md-3 form-group from-inline"
                            component={this.renderCheckControl} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        );
    }
}


function validate(values) {
    // values containe all input field
    console.log(values);
    const errors = {};

    // If errors is empty, the form is fine to submit
    // If errors has any properties, redux from assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'searchForm'
})(SearchForm);
