import { 
    UncontrolledButtonDropdown, 
    DropdownMenu, 
    DropdownItem, 
    DropdownToggle
} 
from 'reactstrap'
import {
    FacebookShareButton, 
    EmailIcon, 
    FacebookIcon
} from 'react-share'
import { useHistory } from 'react-router-dom'

const ShareButton = (props) => {
  const {push} = useHistory()
    return ( 
    <div>         
    <UncontrolledButtonDropdown direction="right">
      <DropdownToggle caret>
        Share
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >
            <div className='drop-down-group' onClick={() => push(`/events/${props.id}/email`)}>
            <EmailIcon size={32} round={true}/>
            <p>Share with E-mail</p>
            </div>
            </DropdownItem>
        <DropdownItem>
            <FacebookShareButton quote="You're invited" url='www.google.com'>
            <div className='drop-down-group'>
                <FacebookIcon size={32} round={true}/>
                <p>Share with Facebook</p>
            </div>
            </FacebookShareButton>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
    </div> );
}
 
export default ShareButton;