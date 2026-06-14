const whoWeHelp = [
  ['home-users', 'Home Computer Users', 'Friendly help for slow PCs, Wi-Fi, printers, viruses, backups, and everyday computer problems.', ['Slow computer cleanup and tune-ups', 'Virus and malware cleanup', 'Printer, Wi-Fi, email, and software help', 'Backup setup and data transfer']],
  ['small-business', 'Small Businesses', 'Dependable local IT support without a full-time IT department.', ['Workstation and laptop support', 'Network, Wi-Fi, and printer troubleshooting', 'QuickBooks and business software help', 'Backup, security, and upgrade planning']],
  ['remote-workers', 'Remote Workers', 'Keep your home office running with secure, reliable computer and network support.', ['VPN, email, webcam, and headset help', 'Dual monitor and docking station setup', 'Wi-Fi reliability improvements', 'Security updates and malware protection']],
  ['seniors-families', 'Seniors & Families', 'Patient, plain-English help for computers, email, phones, printers, and online safety.', ['Pop-up and unwanted software cleanup', 'Email, password, and account help', 'Printer and device setup', 'Simple training and guidance']],
  ['gamers-custom-pcs', 'Gamers & Custom PCs', 'Repairs, upgrades, cooling, and troubleshooting for gaming desktops and performance systems.', ['Custom PC diagnostics and repair', 'GPU, RAM, SSD, and cooling upgrades', 'Crash, overheating, and performance fixes', 'Windows and driver optimization']],
  ['students', 'Students', 'Fast help when school laptops, documents, Wi-Fi, or software stop working.', ['Laptop repair and tune-ups', 'Data recovery and file transfer', 'School software and account help', 'Affordable upgrades to extend device life']],
  ['realtors-mobile-pros', 'Realtors & Mobile Pros', 'Support for people who rely on laptops, email, printers, cloud files, and mobile workflows.', ['Laptop, email, and cloud file support', 'Mobile printer and scanner setup', 'Secure backups for important documents', 'Fast troubleshooting before appointments']],
  ['local-offices', 'Local Offices', 'Practical support for offices that need computers, printers, and networks working every day.', ['Shared printer and scanner fixes', 'Router, switch, and Wi-Fi support', 'New computer setup and migration', 'Preventive maintenance and security checks']]
];

const scrollToWho = (id) => {
  const el = document.getElementById('who-' + id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="who-help">
      <div className="section-inner">
        <h2 className="section-title">Who We Help</h2>
        <p className="section-sub">Computer help for homes, small businesses, remote workers, gamers, students, and local offices across Concord and surrounding areas.</p>
        <div className="who-help-grid">
          {whoWeHelp.map(([id, title, short]) => (
            <a key={id} className="who-help-tile" href={'#who-' + id} onClick={(e) => { e.preventDefault(); scrollToWho(id); }}>
              <h3>{title}</h3>
              <p>{short}</p>
              <span>Learn more →</span>
            </a>
          ))}
        </div>
        <div className="who-help-details">
          {whoWeHelp.map(([id, title, short, items]) => (
            <div key={id} id={'who-' + id} className="who-help-detail-card">
              <h3>{title}</h3>
              <p>{short}</p>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
