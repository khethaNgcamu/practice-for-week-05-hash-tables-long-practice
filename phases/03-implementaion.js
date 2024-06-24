function kthMostFrequent(str, k) {
    const frequency = {};
  
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  
    const sortedChars = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
  
    return sortedChars[k - 1];
  }

  function newAlphabet(str, order) {
    const orderMap = {};
  
    for (let i = 0; i < order.length; i++) {
      orderMap[order[i]] = i;
    }
  
    for (let i = 1; i < str.length; i++) {
      if (orderMap[str[i]] < orderMap[str[i - 1]]) {
        return false;
      }
    }
  
    return true;
  }

  function longestPalindrome(str) {
    const frequency = {};
    let length = 0;
    let oddCount = 0;
  
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  
    for (let char in frequency) {
      length += Math.floor(frequency[char] / 2) * 2;
      if (frequency[char] % 2 === 1) {
        oddCount = 1;
      }
    }
  
    return length + oddCount;
  }

  function longestSubstr(str) {
    const seen = {};
    let maxLength = 0;
    let start = 0;
  
    for (let end = 0; end < str.length; end++) {
      const char = str[end];
  
      if (seen[char] !== undefined && seen[char] >= start) {
        start = seen[char] + 1;
      }
  
      seen[char] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

  function maxSubarr(arr) {
    let maxLength = 0;
    let start = 0;
    const frequency = {};
  
    for (let end = 0; end < arr.length; end++) {
      frequency[arr[end]] = (frequency[arr[end]] || 0) + 1;
  
      while (Math.max(...Object.keys(frequency)) - Math.min(...Object.keys(frequency)) > 1) {
        frequency[arr[start]]--;
        if (frequency[arr[start]] === 0) delete frequency[arr[start]];
        start++;
      }
  
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

  function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  }

  function climbingSteps(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
  
    let ways = [1, 1, 2];
  
    for (let i = 3; i <= n; i++) {
      ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
    }
  
    return ways[n];
  }