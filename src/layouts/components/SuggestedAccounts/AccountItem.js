import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <HeadlessTippy interactive delay={[0, 200]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
              {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </HeadlessTippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
