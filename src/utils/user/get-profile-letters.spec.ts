import {getProfileLetters} from './get-profile-letters';

describe('get profile letters', () => {
  test('should split by .', () => {
    const res = getProfileLetters({
      email: 'mariia.anokhina@gmail.com'
    });

    expect(res).toEqual('MA');
  });

  test('should split by -', () => {
    const res = getProfileLetters({
      email: 'mariia@gmail.com',
      name: 'Mariia-Anokhina'
    });

    expect(res).toEqual('MA');
  });

  test('should split by _', () => {
    const res = getProfileLetters({
      email: 'mariia@gmail.com',
      name: 'Mariia_Anokhina'
    });

    expect(res).toEqual('MA');
  });

  test('should split by space', () => {
    const res = getProfileLetters({
      email: 'mariia.anokhina@gmail.com',
      name: 'Mariia Anokhina'
    });

    expect(res).toEqual('MA');
  });

  test('should return first 2 letters if no separator', () => {
    const res = getProfileLetters({
      email: 'mariia.anokhina@gmail.com',
      name: 'MariiaAnokhina'
    });

    expect(res).toEqual('MA');
  });
  test('should return first 2 letters if no separator email', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com'
    });

    expect(res).toEqual('AD');
  });
  test('should return email if empty username', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: ''
    });

    expect(res).toEqual('AD');
  });

  test('should work with short names', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: 'M'
    });

    expect(res).toEqual('M');
  });
});
