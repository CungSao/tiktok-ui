import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import { faCamera, faHouse, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SuggestedAccounts from '~/layouts/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} />
        <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUserGroup} />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faCamera} />} />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
