import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import { faCamera, faHouse, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SuggestedAccounts from '~/layouts/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    userService
      .getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handSeeAll = () => {
    setPage(page + 1);
  };

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} />
        <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUserGroup} />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faCamera} />} />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" data={suggestedUsers} onSeeAll={handSeeAll} />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
