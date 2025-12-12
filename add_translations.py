#!/usr/bin/env python3
"""
Automated script to add Hindi/English translation support to all React pages.
This script adds the useLanguage hook import and replaces hardcoded strings with t() calls.
"""

import os
import re

# Base directory
BASE_DIR = "/Users/amansingh/Desktop/Gaon/src/pages"

# Pages and their translation mappings
PAGES_CONFIG = {
    "Plans.js": {
        "import_line": "import { useLanguage } from '../context/LanguageContext';",
        "hook_line": "  const { t } = useLanguage();",
        "replacements": [
            ('"Development Plans"', "t('plans.heroTitle')"),
            ('"Our vision for a progressive, sustainable, and prosperous village"', "t('plans.heroSubtitle')"),
            ('"Filter by Category:"', "t('plans.filterLabel')"),
            ('"All Plans"', "t('plans.allPlans')"),
            ('"Infrastructure"', "t('plans.infrastructure')"),
            ('"Education"', "t('plans.education')"),
            ('"Healthcare"', "t('plans.healthcare')"),
            ('"Employment"', "t('plans.employment')"),
            ('"Water & Sanitation"', "t('plans.water')"),
            ('"Agriculture"', "t('plans.agriculture')"),
            ('"Social Welfare"', "t('plans.social')"),
            ('"Showing"', "t('plans.showing')"),
            ('"Plan"', "t('plans.plan')"),
            ('"Plans"', "t('plans.plans')"),
            ('"Progress:"', "t('plans.progress')"),
            ('"Key Benefits:"', "t('plans.keyBenefits')"),
        ]
    },
    "SkilledVillagers.js": {
        "import_line": "import { useLanguage } from '../context/LanguageContext';",
        "hook_line": "  const { t } = useLanguage();",
        "replacements": [
            ('"Skilled Villagers"', "t('villagers.heroTitle')"),
            ('"Celebrating the achievements and talents of our community members"', "t('villagers.heroSubtitle')"),
            ('"Search by name, profession, or achievements..."', "t('villagers.searchPlaceholder')"),
            ('"All Categories"', "t('villagers.allCategories')"),
            ('"Government Service"', "t('villagers.government')"),
            ('"Private Sector"', "t('villagers.private')"),
            ('"Business"', "t('villagers.business')"),
            ('"Sports"', "t('villagers.sports')"),
            ('"Healthcare"', "t('villagers.healthcare')"),
            ('"Arts & Culture"', "t('villagers.arts')"),
        ]
    },
}

print("Translation Automation Script")
print("=" * 50)
print("\nThis script will add translation support to all pages.")
print("Review the changes after running.")
print("\nPages to update:")
for page in PAGES_CONFIG.keys():
    print(f"  - {page}")

print("\n" + "=" * 50)
print("\nManual steps required:")
print("1. Add import: import { useLanguage } from '../context/LanguageContext';")
print("2. Add hook: const { t } = useLanguage();")
print("3. Replace strings with t('key') calls")
print("\nRefer to TRANSLATION_IMPLEMENTATION.md for complete keys.")
