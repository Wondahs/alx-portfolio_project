import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  // Add other fields with validation rules
});

function EditProfile() {
  const user = getUserData();
  const [formData, setFormData] = useState(user);
  const { register, onSubmit, formState: { errors }, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (data) => { // Renamed handleSubmit to handleFormSubmit
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Update local user data and display success message
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      setError('general', { type: 'manual', message: error.message });
    }
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={onSubmit}> {/* Use onSubmit here */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          {...register('name')}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled />
        {/* Add other profile edit fields with validation */}
        <button type="submit">Save Changes</button>
        {errors.general && <p className="error">{errors.general.message}</p>}
      </form>
    </div>
  );
}

export default EditProfile;

