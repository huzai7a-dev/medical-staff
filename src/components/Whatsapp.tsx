import whatsappIcon from '@/assets/whatsapp.png';
import { CONTACT_NUMBER } from '@/lib/constants';
const Whatsapp = ()=> {
    return (
        <a href={`https://api.whatsapp.com/send?phone=${CONTACT_NUMBER}&text=Hello%20there!`} target="_blank">
            <img src={whatsappIcon} width={50} height={50} className='fixed bottom-4 right-4 animate-bounce z-50' />
        </a>
    )
}

export default Whatsapp