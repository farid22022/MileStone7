

const CountryData = (props) => {
    const {country,handleVisitedCountry,handleVisitedFlags} = props;
    return (
        <div>
            <p><small>Country Data : {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;