import assert from 'assert'
import fs     from 'fs'
import Helper from '../src/helper.js'
import Row    from '../src/row.js'
let test_file = 'test.lock'

describe('Helper', () => {
  beforeEach((done) => {
    fs.unlink(test_file, (err) => {
      done()
    })
  })

  it('can instantiate', () => {
    assert.ok(new Helper(test_file) != null, "Helper is not null")
  })

  it('can search when initialized', (done) => {
    new Helper(test_file)
      .search()
      .then(rows => {
        assert.ok(rows.length == 0, "length should be zero")
        done()
      })
      .catch(err => {
        assert.ok(err == null, "should not raise error")
        done()
      })
  })

  it('can create_or_update_by_pathes', (done) => {
    new Helper(test_file)
      .create_or_update_by_pathes(["key1", "key2"])
      .then(rows => {
        assert.equal(2, rows.length, "length should be two")
        assert.equal("key1", rows[0].path, "path should not be null")
        assert.ok(null != rows[0].updated_at, "updated_at should not be null")
        assert.equal("key2", rows[1].path, "path should not be null")
        assert.ok(null != rows[1].updated_at, "updated_at should not be null")
        done()
      })
      .catch(err => {
        assert.ok(err == null, "should not raise error")
        done()
      })
  })
})
