import React from 'react';
import memberData from '../../data/members';

function MemberDirectory() {
  return (
    <div className="tab-content">
      <h2 className="directory-title">Member Directory</h2>

      <div className="card">
        <div className="responsive-table">
          <table className="member-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {memberData.map(member => (
                <tr key={member.id}>
                  <td data-title="Name">{member.name}</td>
                  <td data-title="Email">
                    <a href={`mailto:${member.email}`}>
                      {member.email}
                    </a>
                  </td>
                  <td data-title="Role">{member.role}</td>
                  <td data-title="Joined">{new Date(member.joined).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MemberDirectory;
