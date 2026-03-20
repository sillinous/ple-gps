#!/usr/bin/env bash
# setup-labels.sh
# Run this with GitHub CLI: bash setup-labels.sh
# Requires: gh (GitHub CLI) authenticated

REPO="sillinous/ple-gps"

echo "Setting up labels for $REPO..."

# Working Groups
gh label create "WG-THEORY" --color "0075ca" --description "Core economic models, UBI frameworks, post-scarcity theory" --repo $REPO
gh label create "WG-POLICY" --color "005a9e" --description "Transition policy, legislative frameworks, international models" --repo $REPO
gh label create "WG-TECH" --color "6f42c1" --description "Automation mapping, AI impact analysis, platform tools" --repo $REPO
gh label create "WG-COMMUNITY" --color "28a745" --description "Mutual aid networks, local implementation, grassroots organizing" --repo $REPO
gh label create "WG-COMMS" --color "fd7e14" --description "Public messaging, media strategy, education" --repo $REPO
gh label create "WG-GOVERNANCE" --color "dc3545" --description "Community governance, DAO structures, democratic design" --repo $REPO

# Status
gh label create "needs-triage" --color "e4e669" --description "Needs initial review and categorization" --repo $REPO
gh label create "needs-discussion" --color "fbca04" --description "Needs community input before moving forward" --repo $REPO
gh label create "in-progress" --color "0052cc" --description "Actively being worked on" --repo $REPO
gh label create "blocked" --color "d73a4a" --description "Blocked on external input or decision" --repo $REPO
gh label create "ready-for-review" --color "0e8a16" --description "Ready for community or WG review" --repo $REPO

# Type
gh label create "bug" --color "d73a4a" --description "Something is broken or inaccurate" --repo $REPO
gh label create "proposal" --color "a2eeef" --description "New content, feature, or direction proposed" --repo $REPO
gh label create "research" --color "bfd4f2" --description "Research needed or requested" --repo $REPO
gh label create "working-group" --color "e4e669" --description "Related to working group structure" --repo $REPO
gh label create "governance" --color "c5def5" --description "Community governance decisions" --repo $REPO
gh label create "documentation" --color "0075ca" --description "Documentation improvements" --repo $REPO

# Priority
gh label create "priority-high" --color "b60205" --description "High priority" --repo $REPO
gh label create "priority-medium" --color "fbca04" --description "Medium priority" --repo $REPO
gh label create "priority-low" --color "0e8a16" --description "Low priority" --repo $REPO

# Community
gh label create "good-first-issue" --color "7057ff" --description "Good for newcomers" --repo $REPO
gh label create "help-wanted" --color "008672" --description "Extra attention needed, community can contribute" --repo $REPO
gh label create "roadmap" --color "e99695" --description "Relates to roadmap priorities" --repo $REPO
gh label create "major-decision" --color "d73a4a" --description "Requires Type 3 community decision process" --repo $REPO
gh label create "constitutional" --color "b60205" --description "Requires Type 4 constitutional decision process" --repo $REPO

echo "Done. Labels created for $REPO"
