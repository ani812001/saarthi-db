import Layout from "../Components/layout/Layout";

const Companies = () => {
  return (
    <Layout>
      <h1>Companies</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>TCS</td>
            <td>Mumbai</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Companies;