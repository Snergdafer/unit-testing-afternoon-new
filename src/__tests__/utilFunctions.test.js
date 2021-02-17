import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shorten text wont alter a string under 100 chars', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shorten text cuts of extra characters and adds three periods', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

test('passed in users and posts get a diplayName property', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})
test('attachUserName will remove any userless post', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})