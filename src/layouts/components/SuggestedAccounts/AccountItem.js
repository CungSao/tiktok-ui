import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/232aaa9fb2f981646202ea6f956713d2~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1707044400&x-signature=UWsoKrU7IHDcOzdtdw0ZsPjVj1A%3D"
        alt=""
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>hoang</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Tran Van Hoang</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
