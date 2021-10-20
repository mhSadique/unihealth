import useServices from '../hooks/useServices';

const FindDoctor = () => {
    const {generalServices} = useServices();

    return (
        <>
            <div>
                {generalServices.map(service => 'hello ' + service.serviceName)}
            </div>
            <hr/>
            {/* <div>
                {cancerServices.map(service => service)}
            </div>
            <hr/>
            <div>
                {specialtyServices.map(service => service)}
            </div> */}
        </>
    );
};

export default FindDoctor;