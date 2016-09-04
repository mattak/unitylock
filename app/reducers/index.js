export default function list(state = 0, action) {
  switch (action.type) {
    default:
      return [
        { user: 'John', file: 'Main.unity', time: '2016-08-20 12:16:12' },
        { user: 'Takeshi', file: 'Title.unity', time: '2016-08-20 12:16:12' },
        { user: null, file: 'Menu.unity', time: '2016-08-20 12:34:56' },
      ]
  }
}
