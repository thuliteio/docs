import { getCollection } from 'astro:content';
import { isEnglishEntry, isKoreanEntry, isRecipeEntry, isTutorialEntry, isCmsEntry, isAnalyticsEntry, isDeployEntry, isThemeEntry, isIntegrationEntry } from './content/config';

export const allPages = await getCollection('docs', (entry) => {
	if (import.meta.env.PUBLIC_TWO_LANG) {
		// Build for two languages only to speed up Astro's smoke tests
		return isEnglishEntry(entry) || isKoreanEntry(entry);
	} else {
		return true;
	}
});
export const tutorialPages = allPages.filter(isTutorialEntry);
export const recipePages = allPages.filter(isRecipeEntry);
export const englishPages = allPages.filter(isEnglishEntry);
export const cmsPages = allPages.filter(isCmsEntry);
export const analyticsPages = allPages.filter(isAnalyticsEntry);
export const deployPages = allPages.filter(isDeployEntry);
export const themesPages = allPages.filter(isThemeEntry);
export const integrationPages = allPages.filter(isIntegrationEntry);
