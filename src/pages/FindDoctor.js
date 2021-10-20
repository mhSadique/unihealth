import useServices from '../hooks/useServices';

const FindDoctor = () => {
    const {generalServices} = useServices();

    return (
        <>
            <div>
                {generalServices.map(service => 'hello ' + service.serviceName)}
            </div>
            <hr/>
        </>
    );
};

export default FindDoctor;