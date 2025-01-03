import {postWatchedItem} from '.'
import {watchItemFixture} from '../../../../../fixtures'

describe('postWatchedItem', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve()) as jest.Mock
  })

  it('calls POST watched_items api', async () => {
    await postWatchedItem({
      tmdbId: watchItemFixture.tmdbId,
      mediaType: watchItemFixture.mediaType,
    })
    expect(fetch).toHaveBeenCalledWith('/api/shows/watched_items', {
      method: 'POST',
      body: JSON.stringify({
        tmdbId: watchItemFixture.tmdbId,
        mediaType: watchItemFixture.mediaType,
      }),
    })
  })
})
