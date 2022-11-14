import chair from '../../../assets/images/chair.png'
import { DayPicker, Footer } from 'react-day-picker';
import image from '../../../assets/images/bg.png'


const AppointmentHeader = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <div className="hero my-6 "
                style={{
                    background: `url(${image})`
                }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='max-w-sm rounded-lg' src={chair} alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            footer={Footer}
                        >
                        </DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;