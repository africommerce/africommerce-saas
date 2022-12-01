#!/bin/bash

# Set up start date for October 2022
START_DATE="2022-11-01"
END_DATE="2022-11-30"
PROJECT_NAME="africommerce-saas"

# Array of commit messages for each day
commit_messages=(
  "Added user profile update form"
  "Integrated Update Specific User API"
  "Implemented controlled form for profile updates"
  "Added input validation for profile fields"
  "Updated user context with profile changes"
  "Handled API errors and success responses"
  "Refactored profile update logic for reusability"
  "Improved UI feedback on profile updates"
  "Implemented loading states for profile updates"
  "Added toast notifications for update status"
  "Fixed form re-render issues after update"
  "Optimized API request with debounce"
  "Improved accessibility for form inputs"
  "Tested user profile update functionality"
  "Enhanced error messages for failed updates"
  "Fixed UI inconsistencies in profile section"
  "Added placeholder images for profile avatars"
  "Implemented caching for faster profile loading"
  "Improved responsiveness of profile page"
  "Created unit tests for profile update component"
  "Set up integration tests for API interactions"
  "Added retry mechanism for API failures"
  "Improved state management in user context"
  "Refactored API calls to use React Query"
  "Fixed minor UI bugs in profile settings"
  "Conducted final testing and UI refinements"
  "Updated documentation for profile updates"
  "Optimized profile update flow for performance"
  "Conducted security audit on API interactions"
  "Finalized changes and prepared for deployment"
)

# Loop through each day in February 2022
CURRENT_DATE="$START_DATE"
i=0

while [ "$(date -j -f "%Y-%m-%d" "$CURRENT_DATE" "+%Y-%m-%d")" != "$(date -j -v+1d -f "%Y-%m-%d" "$END_DATE" "+%Y-%m-%d")" ]; do
    echo "${commit_messages[$i]}" > update.txt
    git add update.txt
    GIT_COMMITTER_DATE="$CURRENT_DATE 12:00:00" git commit --date="$CURRENT_DATE 12:00:00" -m "${commit_messages[$i]}"
    
    # Move to the next day
    CURRENT_DATE=$(date -j -v+1d -f "%Y-%m-%d" "$CURRENT_DATE" "+%Y-%m-%d")
    
    # Stop if we run out of commit messages
    ((i++))
    if [ $i -ge ${#commit_messages[@]} ]; then
        break
    fi
done

# Push to GitHub (replace with your repo URL)
git remote add origin https://github.com/ShedrachJonah11/africommerce-saas.git
git branch -M main
git push -u origin main --force
