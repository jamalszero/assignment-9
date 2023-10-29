import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div className='my-14'>

            <AwesomeSlider className='h-[400px]'>
                <div><img src="https://i.ibb.co/y44xdyY/24023085-conference-01.jpg" alt="banner" className="w-full" /></div>
                <div><img src="https://i.ibb.co/sbKYRvt/pngwing-com.png" alt="banner" className="w-full" /></div>
            </AwesomeSlider>
          
        </div>
    );
};

export default Banner;