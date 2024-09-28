const logo = {
  color: '#0ef',
  fontSize: '40px',
  fontWeight: '600',
  cursor: 'pointer',
  '&:hover': {
    color: '#00b3bf',
    transition: '.3s',
  },
};

const appbar = {
  background: '#212121',
  marginBottom: '40px',
};

const link = {
  textDecoration: 'none',
  color: 'inherit',
};

const toolbar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const authButtons = {
  display: 'flex',
  gap: '10px',
};

const userInfo = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const avatar = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'blue',
};

const userName = {
  fontSize: '16px',
  color: 'white',
  marginRight: '10px',
};

const styles = {
  logo,
  appbar,
  link,
  toolbar,
  authButtons,
  userInfo,
  avatar,
  userName,
};

export default styles;
