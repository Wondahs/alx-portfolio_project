import { v4 as uuidv4 } from 'uuid';

export default class FetchHelper {
  /**
 * Registers a new user to the specified URL.
 *
 * @param {string} url - The URL to send the registration request to.
 * @param {object} user - The user object containing the user's information.
 * @property {string} user.username - The username of the user.
 * @property {string} user.email - The email of the user.
 * @property {string} user.password - The password of the user.
 * @returns {Promise<object>} - A promise that resolves to the registered user object.
 * @throws {Error} - If the registration request fails.
 */
  static async registerUser(url, user) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...user,
        id: new uuidv4(),
        postedJobs: [],
        appliedJobs: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to register user');
    }
  }

  /**
 * Retrieves a user from the specified URL by their user ID.
 *
 * @param {string} url - The URL to send the GET request to.
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<object>} - A promise that resolves to the retrieved user object.
 * @throws {Error} - If the GET request fails.
 */
  static async getUser(url, userId) {
    const response = await fetch(`${url}/${userId}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to get user');
    }
  }

  /**
 * Updates a user in the specified URL by their user ID.
 *
 * @param {string} url - The URL to send the PUT request to.
 * @param {object} updatedUser - The updated user object containing the user's information.
 * @returns {Promise<object>} - A promise that resolves to the updated user object.
 * @throws {Error} - If the PUT request fails.
 */
  static async updateUser(url, updatedUser) {
    const response = await fetch(`${url}/${updatedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...updatedUser,
        updatedAt: new Date().toISOString(),
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to update user');
    }
  }

  /**
 * Posts a new job to the specified URL for the given user.
 * Updates the user's postedJobs array with the new job ID.
 *
 * @param {string} url - The URL to send the POST request to.
 * @param {string} userId - The ID of the user who is posting the job.
 * @param {object} job - The job object containing the job's information.
 * @property {string} job.title - The title of the job.
 * @property {string} job.description - The description of the job.
 * @property {string} job.location - The location of the job.
 * @returns {Promise<object>} - A promise that resolves to an object containing the job ID.
 * @throws {Error} - If the POST request fails or if the user update fails.
 */
  static async postJob(url, userId, job) {
    const jobId = uuidv4();
    // const {title: jobTitle} = job;
    let response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...job,
        id: jobId,
        postedBy: userId,
      }),
    });
    if (response.ok) {
      const user = await this.getUser(url, userId);
      user.postedJobs.push(jobId);
      await this.updateUser(url, user);
      console.log(`Job: ${jobId} posted by user: ${userId}`);
      return await response.json();
    } else {
      throw new Error('Failed to post job');
    }
  }

  /**
 * Applies a job for the given user by adding the job ID to the user's appliedJobs array.
 * Updates the user's information in the specified URL.
 *
 * @param {string} url - The URL to send the PUT request to.
 * @param {object} user - The user object containing the user's information.
 * @param {string} jobId - The ID of the job to apply for.
 * @returns {Promise<void>} - A promise that resolves when the job application is successful.
 * @throws {Error} - If the PUT request fails.
 */
  static async applyJob(url, user, jobId) {
    user.appliedJobs.push(jobId);
    await this.updateUser(url, user);
  }

  /**
 * Retrieves data from the specified URL by appending the provided data to the URL.
 *
 * @param {string} url - The base URL to send the GET request to.
 * @param {string} data - The data to append to the URL.
 * @returns {Promise<object>} - A promise that resolves to the retrieved data.
 * @throws {Error} - If the GET request fails.
 */
  static async getData(url) {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to get data');
    }
  }

  /**
   * Authenticates a user by checking their email and password against the retrieved user data.
   *
   * @param {string} url - The base URL to send the GET request to fetch user data.
   * @param {string} email - The email of the user attempting to log in.
   * @param {string} password - The password of the user attempting to log in.
   * @returns {Promise<object>} - A promise that resolves to the user object if the login is successful.
   * @throws {Error} - If the user is not found or if the email and password do not match.
   */
  static async Login(url, email, password) {
    const users = await this.getData(url, 'users');

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) return user;
    else throw new Error('Invalid email or password');
  }
}
