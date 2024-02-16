-- Insert example charities
INSERT INTO charities (name, description) VALUES 
('Charity A', 'Dedicated to providing educational materials to underserved communities.'),
('Charity B', 'Focused on feeding the homeless and providing shelter.');

-- Insert example sponsors
INSERT INTO sponsors (name, description, website_url) VALUES 
('Sponsor A', 'A local grocery store chain willing to donate food and resources.', 'http://sponsorA.com'),
('Sponsor B', 'A clothing brand looking to support communities with clothing donations.', 'http://sponsorB.com');

-- Assuming the names of needs are unique and already exist in the needs_registry
-- Map charities to their needs using unique names
INSERT INTO charity_needs (charity_id, need_id)
SELECT c.id, n.id FROM charities c
JOIN needs_registry n ON n.need_name = 'Educational Materials'
WHERE c.name = 'Charity A';

INSERT INTO charity_needs (charity_id, need_id)
SELECT c.id, n.id FROM charities c
JOIN needs_registry n ON n.need_name = 'Food'
WHERE c.name = 'Charity B';

-- Map sponsors to their needs using unique names
INSERT INTO sponsor_needs (sponsor_id, need_id)
SELECT s.id, n.id FROM sponsors s
JOIN needs_registry n ON n.need_name = 'Food'
WHERE s.name = 'Sponsor A';

INSERT INTO sponsor_needs (sponsor_id, need_id)
SELECT s.id, n.id FROM sponsors s
JOIN needs_registry n ON n.need_name = 'Clothes'
WHERE s.name = 'Sponsor B';
