export function Option({ video }) {
  return (
    <option value={video}>
      {video.slice(0, 1).toUpperCase() + video.slice(1)}
    </option>
  );
}
