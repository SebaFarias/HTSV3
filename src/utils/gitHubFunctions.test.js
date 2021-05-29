import { getUserInfo } from './gitHubFunctions'

test("Gets General info from an user", async () => {
  expect( await getUserInfo('SebaFarias').id).toBe(366447841)
})