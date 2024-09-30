const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: '#212121',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  width: '300px',
};

const input = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
};

const button = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#000',
  color: '#0ef',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  marginTop: '10px',
};

const title = {
  marginBottom: '20px',
  fontSize: '24px',
  color: '#fff',
};

const error = {
  color: 'red',
  fontSize: '14px',
  marginTop: '10px',
};

const styles = {
  container,
  form,
  input,
  button,
  title,
  error,
};

export default styles;
